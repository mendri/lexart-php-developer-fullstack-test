<?php
  function generateId() {
    $id = "";
    $letters = range('a', 'z');
    $numbers = range(0, 9);
    $options = [$letters, $numbers];

    for ($i = 1; $i < 20; $i++) {
      if ($i == 5 || $i == 10 || $i == 15) {
        $id = $id . "-";
      } else {
        $numOrStr = random_int(0, 1);
        $randomIndex = array_rand($options[$numOrStr]);
        $id = $id . $options[$numOrStr][$randomIndex];
      }
    }

    return $id;
  }

  $id = generateId();
  var_dump($id);
?>