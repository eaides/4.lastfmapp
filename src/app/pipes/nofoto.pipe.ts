import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nofoto'
})
export class NofotoPipe implements PipeTransform {

  transform(images: any[]): any {
    const noImage = 'assets/img/noimage.png';
    // console.log(images);
    if (!images) {
      return noImage;
    }
    if (images.length >= 3) {
      const imLn2: number = images[2]['#text'].length;
      if (imLn2 > 5) {
        return images[2]['#text'];
      }
    if (images.length >= 2) {
      const imLn1: number = images[1]['#text'].length;
      if (imLn1 > 5) {
        return images[1]['#text'];
      }
    }
    return noImage;
  }

}
