import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nofoto'
})
export class NofotoPipe implements PipeTransform {

  transform(images: any[]): any {
    const noImage = 'assets/img/noimage.png';
    console.log(images);
    if (!images) {
      return noImage;
    }
    if (images.length >= 3) {
      return images[2]['#text'];
    } else if (images.length >= 2) {
      return images[1]['#text'];
    }
    return noImage;
  }

}
