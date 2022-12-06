// First exercise 4, second 14
const MARKER_LENGTH = 4;

const isMarker = marker => {
  for(let i = 0; i < marker.length - 1; i++){ 
    for(let j = i + 1; j < marker.length; j++){ 
      if (marker[i] == marker[j]) return false; 
    } 
  } 
  return true; 
}

export const compute = value => {
  for(let i = 0; i < value.length; i++) {
    const possibleMarker = value.substring(i, i + MARKER_LENGTH);
    if (isMarker(possibleMarker)) return i + MARKER_LENGTH;
  }
  return '';
}