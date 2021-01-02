import { Component,OnInit, ViewChild, ElementRef } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import Cropper from "cropperjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'image-layout';
  bool:Boolean=false;
  images = [
    { img: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg', thumb:
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg', description: 'Image 1' },
    { img: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg', thumb:
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg', description: 'Image 2' },
    { img: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg', thumb:
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg', description: 'Image 3' },
    { img: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg', thumb:
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg', description: 'Image 4' },
    { img: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg', thumb:
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg', description: 'Image 5' },
    { img: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg', thumb:
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg', description: 'Image 6' },
    { img: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg', thumb:
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg', description: 'Image 7' },
    { img: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg', thumb:
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg', description: 'Image 8' },
    { img: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg', thumb:
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg', description: 'Image 9' }
  ];

  @ViewChild("image", { static: false })
    public imageElement: ElementRef;

    

    public imageDestination: string;
    private cropper: Cropper;
    public constructor() {
      this.imageDestination = "";
  }

  public ngAfterViewInit() {
      this.cropper = new Cropper(this.imageElement.nativeElement, {
          zoomable: false,
          scalable: true,
          aspectRatio: 1,
          crop: () => {
              const canvas = this.cropper.getCroppedCanvas();
              this.imageDestination = canvas.toDataURL("image/png");
          }
      });
  }

  public ngOnInit() { }
 
  drop(event: CdkDragDrop<string[]>) {
    
    moveItemInArray(this.images, event.previousIndex, event.currentIndex);
    
    
  }
  navLinks = ['Dashboard', 'Home', 'Settings'];
  
}
