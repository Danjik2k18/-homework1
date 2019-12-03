//1 вариант

// function week(day) {
//   if (day != 6 && day != 7) {
//     console.log('Необходимо идти на работу!')
//   } else console.log('Можно отдохнуть!')
// }
// week(7)

// 2 variant
function week(day) {
  (day != 6 && day != 7) ? console.log('Необходимо идти на работу!'): console.log('Можно отдохнуть!');
}
week(7);