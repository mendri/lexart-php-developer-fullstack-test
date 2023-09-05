<?php

namespace App\Http\Controllers;

use App\Models\Search;
use Exception;
use Illuminate\Http\Request;
use Goutte\Client;

class ScraperController extends Controller
{
    private function mercadoLivreSearchScraper($searchInput)
{
    usleep(100000);
    $client = new Client();
    $crawler = $client->request('GET', "https://lista.mercadolivre.com.br/$searchInput");

    $products = $crawler->filter('.ui-search-result__wrapper')->slice(0, 5)->each(function ($node) use ($client) {
        $title = $node->filter('.shops__item-title')->text();
        $price = $node->filter('.andes-money-amount__fraction')->text();
        $imageLink = $node->filter('.shops__image-element')->attr('data-src');
        $productLink = $node->filter('a.ui-search-item__group__element')->attr('href');;
        $description = "";

        try {
            usleep(100000);
            $productPage = $client->request('GET', $productLink);
            $description = $productPage->filter('.ui-pdp-description__content')->text();
        } catch(Exception $e) {
        }

        return [
            "title" => $title,
            "price" => "R$ $price",
            "img_url" => $imageLink,
            "market_page_link" => $productLink,
            "description" => $description,
            "market" => "mercado_livre"
        ];
    });
    
    return $products;
}

    private function buscapeSearchScraper($searchInput)
{
    usleep(100000);
    $client = new Client();
    $crawler = $client->request('GET', "https://www.buscape.com.br/search?q=$searchInput");

    $products = $crawler->filter('.ProductCard_ProductCard__EEJFq')->slice(0, 5)->each(function ($node) {
        $title = $node->filter('.ProductCard_ProductCard_Name__LT7hv')->text();
        $price = $node->filter('.Text_MobileHeadingS__Zxam2')->text();
        $imageLink = $node->filter('.ProductCard_ProductCard_Image__qriN4 span img')->attr('src');
        $productLink = $node->filter('.ProductCard_ProductCard_Inner__tsD4M')->attr('href');

        if (strpos($productLink, 'http') !== 0) {
            $productLink = 'https://www.buscape.com.br' . $productLink;
        }

        return [
            "title" => $title,
            "price" => $price,
            "img_url" => $imageLink,
            "market_page_link" => $productLink,
            "description" => "",
            "market" => "buscape"
        ];
    });

    return $products;
}

private function saveSearch($searchInput, $products)
{
    $search = new Search();
    $search->search = strtolower($searchInput);
    $search->result = json_encode($products);
    $search->save();
}

    public function index(Request $request)
{
    $searchInput = $request->input('search');
    $search = Search::where('search', strtolower($searchInput))->get();

    if ($search->isEmpty()) {
        $mercadoLivreProducts = $this->mercadoLivreSearchScraper($searchInput);
        $buscapeProducts = $this->buscapeSearchScraper($searchInput);
    
        $products = array_merge($mercadoLivreProducts, $buscapeProducts);
        shuffle($products);
    
        $response = [
            "products" => $products,
        ];
    
        $this->saveSearch($searchInput, $response);

        return $response;
    } else {
        return json_decode($search[0]["result"]);
    }
}
}