function mergeSort (arr) {
  if (arr.length === 1) return arr
  const mid = ~~(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}

function merge (arr1, arr2) {
  let i = 0
  let j = 0
  const len1 = arr1.length
  const len2 = arr2.length
  let arr = []
  while (i < len1 || j < len2) {
    if (arr1[i] == undefined) {
      arr.push(arr2[j++])
    } else if (arr2[j] == undefined) {
      arr.push(arr1[i++])
    } else if (arr1[i] < arr2[j]) {
      arr.push(arr1[i++])
    } else {
      arr.push(arr2[j++])
    }
  }
  return arr
}