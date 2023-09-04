<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Goutte\Client;

class ScraperController extends Controller
{
    private function mercadoLivreSearchScraper($search)
{
    $client = new Client();
    $crawler = $client->request('GET', "https://lista.mercadolivre.com.br/$search");

    $products = $crawler->filter('.ui-search-result__wrapper')->slice(0, 5)->each(function ($node) {
        $title = $node->filter('.shops__item-title')->text();
        $price = $node->filter('.andes-money-amount__fraction')->text();
        $imageLink = $node->filter('.shops__image-element')->attr('data-src');
        $description = "";
        $categories = "";

        return [
            "title" => $title,
            "price" => $price,
            "img_url" => $imageLink,
            "description" => $description,
            "categories" => $categories
        ];
    });

    dump($products);
    
    return $products;
}


    private function buascapeSearchScraper($search)
{
    $client = new Client();
    
    $crawler = $client->request('GET', 'https://www.mercadolivre.com.br/');

    $titles = $crawler->filter('.ui-recommendations-card__title')->each(function ($node) {
        return $node->text();
    });

    dump($titles);
}

    public function index(Request $request)
{
    $search = $request->input('search');
    
    $mercadoLivreCrawler = $this->mercadoLivreSearchScraper($search);
    //$buscapeCrawler = $this->buascapeSearchScraper($search);
}
}