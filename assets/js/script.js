// function compareNumber(a,b) {
//     if(a==b) {
//         return -1
//     } else if(b>a) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(compareNumber(3,1))

// function reverseString(inputString) {
//     const reversedString = inputString.split("").reverse().join("");
//     return reversedString;
//   }
  
//   const stringToReverse = "NANA";
//   const reversedResult = reverseString(stringToReverse);
//   console.log(reversedResult);

//   function sortTextAlphabetically(text) {
//     const charArray = text.split("");
//     const sortedCharArray = charArray.sort();
//     const sortedText = sortedCharArray.join("");
  
//     return sortedText;
//   }
  
//   const inputText = "banana";
//   const sortedText = sortTextAlphabetically(inputText);
//   console.log(sortedText); 
  
//   function isArithmetic(arr) {
//     if (arr.length <= 2) {
//       return true; 
//     }
  
//     const commonDifference = arr[1] - arr[0]; 
  
//     for (let i = 2; i < arr.length; i++) {
//       if (arr[i] - arr[i - 1] !== commonDifference) {
//         return false; 
//       }
//     }
  
//     return true; 
//   }
  
//   const arr1 = [2, 4, 6, 8];
//   const arr2 = [2, 4, 6, 9];
  
//   console.log(isArithmetic(arr1)); 
//   console.log(isArithmetic(arr2)); 
  
//   function hasPattern(str) {
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === 'a') {
//         for (let j = i + 1; j < str.length; j++) {
//           if (str[j] === 'b') {
//             const distance = j - i;
//             if (distance >= 3 && distance <= 4) {
//               return true;
//             }
//           }
//         }
//       }
//     }
//     return false; 
//   }
  
//   console.log(hasPattern("abcb")); 
//   console.log(hasPattern("abbbbbbb")); 
//   console.log(hasPattern("abcdefg")); 
//   console.log(hasPattern("adefddefg"));
  
//   function calculateGCD(a, b) {
//     if (b === 0) {
//       return a;
//     }
//     return calculateGCD(b, a % b);
//   }
  
//   function findGCD(a, b) {
//     if (a < 0 || b < 0) {
//       return "Bilangan harus positif";
//     }
  
//     const gcd = calculateGCD(a, b);
  
//     return gcd;
//   }
  
//   console.log(findGCD(12, 18));
//   console.log(findGCD(24, 36));
//   console.log(findGCD(7, 5)); 
  
//   function isPrime(number) {
//     if (number <= 1) {
//       return false;
//     }
  
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
  
//     return true;
//   }
  
//   console.log(isPrime(7));  
//   console.log(isPrime(12)); 
//   console.log(isPrime(1)); 
  
//   function isPrime(number) {
//     if (number <= 1) {
//       return false;
//     }
  
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
  
//     return true;
//   }
  
//   function findPrimesInRange(angkaPertama, angkaKedua) {
//     const primes = [];
  
//     for (let number = angkaPertama; number <= angkaKedua; number++) {
//       if (isPrime(number)) {
//         primes.push(number);
//       }
//     }
  
//     return primes;
//   }
  
//   const angkaPertama = 10;
//   const angkaKedua = 50;
//   const primesInRange = findPrimesInRange(angkaPertama, angkaKedua);
//   console.log(primesInRange); 
  
// function selectionSort(arr) {
//     const n = arr.length;
  
//     for (let i = 0; i < n - 1; i++) {
//       let minIndex = i;
  
//       for (let j = i + 1; j < n; j++) {
//         if (arr[j] < arr[minIndex]) {
//           minIndex = j;
//         }
//       }
  
//       if (minIndex !== i) {
//         [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//       }
//     }




  
//     return arr;
//   }
  
//   const arrayAngka = [27, 38, 4, 43, 9, 82, 10];
//   const sortedArray = selectionSort(arrayAngka);
//   console.log(sortedArray);

  // function insertionSort(arr) {
  //   const n = arr.length;
  
  //   for (let i = 1; i < n; i++) {
  //     let current = arr[i];
  //     let j = i - 1;
  
  //     while (j >= 0 && arr[j] > current) {
  //       arr[j + 1] = arr[j];
  //       j--;
  //     }
  
  //     arr[j + 1] = current;
  //   }
  
  //   return arr;
  // }
  
  // const arrayAngka = [27, 38, 4, 43, 9, 82, 10];
  // const sortedArray = insertionSort(arrayAngka);
  // console.log(sortedArray);

  
// function mergeSort(arr) {
//     if (arr.length <= 1) {
//       return arr;
//     }
  
//     const middle = Math.floor(arr.length / 2);
//     const left = arr.slice(0, middle);
//     const right = arr.slice(middle);
  
//     return merge(mergeSort(left), mergeSort(right));
//   }
  
//   function merge(left, right) {
//     let result = [];
//     let leftIndex = 0;
//     let rightIndex = 0;
  
//     while (leftIndex < left.length && rightIndex < right.length) {
//       if (left[leftIndex] < right[rightIndex]) {
//         result.push(left[leftIndex]);
//         leftIndex++;
//       } else {
//         result.push(right[rightIndex]);
//         rightIndex++;
//       }
//     }
  
//     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
//   }
  
//   const arrayAngka = [27, 38, 4, 43, 9, 82, 10];
//   const sortedArray = mergeSort(arrayAngka);
//   console.log(sortedArray);
  


// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === target) {
//         return i; // Mengembalikan indeks elemen yang ditemukan
//       }
//     }
//     return -1; // Mengembalikan -1 jika elemen tidak ditemukan
//   }
  
//   const arrayAngka = [27, 38, 4, 43, 9, 82, 10];
//   const target = 43;
//   const result = linearSearch(arrayAngka, target);
  
//   if (result !== -1) {
//     console.log(`Elemen ${target} ditemukan pada indeks ${result}`);
//   } else {
//     console.log(`Elemen ${target} tidak ditemukan dalam array.`);
//   }
  


// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
  
//     while (left <= right) {
//       const mid = Math.floor((left + right) / 2);
  
//       if (arr[mid] === target) {
//         return mid; // Mengembalikan indeks elemen yang ditemukan
//       } else if (arr[mid] < target) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
  
//     return -1; // Mengembalikan -1 jika elemen tidak ditemukan
//   }
  
//   const arrayAngka = [4, 9, 10, 27, 38, 43, 82];
//   const target = 38;
//   const result = binarySearch(arrayAngka, target);
  
//   if (result !== -1) {
//     console.log(`Elemen ${target} ditemukan pada indeks ${result}`);
//   } else {
//     console.log(`Elemen ${target} tidak ditemukan dalam array.`);
//   }
  

// localStorage.setItem("nama", "John");
// localStorage.setItem("umur", "30");
// const nama = localStorage.getItem("nama");
// const umur = localStorage.getItem("umur");

// console.log(`Nama: ${nama}, Umur: ${umur}`);
// localStorage.removeItem("umur");
// localStorage.clear();



  function fetchData(callback) {
    setTimeout(function () {
      const data = "Ini data dari server";
      callback(data);
    }, 1000);
  }
  
  function processData(data) {
    console.log("Data yang diterima:", data);
  }
  
  fetchData(processData);

  function fetchData() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        const data = "Ini data dari server";
        resolve(data);
        // Jika terjadi kesalahan: reject(new Error('Terjadi kesalahan.'));
      }, 1000);
    });
  }
  
  fetchData()
    .then(function (data) {
      console.log("Data yang diterima:", data);
    })
    .catch(function (error) {
      console.error("Kesalahan:", error.message);
    });

    
    function fetchData() {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            const data = "Ini data dari server";
            resolve(data);
            // Jika terjadi kesalahan: reject(new Error('Terjadi kesalahan.'));
          }, 1000);
        });
      }
      
      async function getData() {
        try {
          const data = await fetchData();
          console.log("Data yang diterima:", data);
        } catch (error) {
          console.error("Kesalahan:", error.message);
        }
      }
      
      getData();
      
