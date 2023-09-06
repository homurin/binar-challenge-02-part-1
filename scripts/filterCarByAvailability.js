function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini

  /* menggunakan perulangan for in untuk menampilkan semua isi 
     element array
  */
  for (let car of cars) {
    // melakukan seleksei element array yang property available nya bernilai true
    if (car.available) {
      result.push(car);
    }
  }

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}

// filterCarByAvailability(cars);
