<?php
  $mixedArray = [ "a", 10, "b", "hola", 122, 15];

  function decomposeArray($array) {
    /*
      eu poderia ter feito assim:
      $decomposed = [
          "strings_array" => array_filter($array, 'is_string'),
          "numbers_array" => array_filter($array, 'is_numeric'),
          "higher_number" => max(array_filter($array, 'is_numeric')),
        ];
      mas resolvi fazer com apenas uma iteração no array
    */

    $decomposed = [
      "higher_number" => null,
      "numbers_array" => [],
      "strings_array" => [],
    ];

    foreach ($array as $element) {
      if (is_numeric($element)) {
        if ($decomposed["higher_number"] == null || $element > $decomposed["higher_number"]) {
          $decomposed["higher_number"] = $element;
        }
        $decomposed["numbers_array"][] = $element;
      }
      if (is_string($element)) {
        $decomposed["strings_array"][] = $element;
      }
    }
    return [$decomposed["strings_array"], $decomposed["numbers_array"], $decomposed["higher_number"]];
  }

  var_dump(decomposeArray($mixedArray));
?>