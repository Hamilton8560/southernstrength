import { Component } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent {


  onWatch(item:any){
    console.log(item)
    if (item == 'hipThrust'){
      const url = 'https://www.youtube.com/watch?v=JScGs1qO0YM?si=VXvMc79qpquKpynO';
      // Open a new window/tab with the video URL
      window.open(url, '_blank');
    }
    if(item == 'beltSquat'){
      const url = 'https://www.youtube.com/watch?v=bKFYsDRyN2U?si=PKQ0t02SrDrMyhum';
      window.open(url, '_blank');
    }
    if(item == 'pendulumPress'){
      const url = 'https://www.youtube.com/watch?v=pQ9rujWHf1o?si=Ro6HJXU1afeTFTP7';
      window.open(url, '_blank');
    }
    if(item == 'hackSquat'){
      const url = 'https://www.youtube.com/watch?v=U5imduDDxjU?si=bxNeohbNzh46-v-3';
      window.open(url, '_blank');
    }
    if(item == 'pullover'){
      const url = 'https://www.youtube.com/watch?v=l77t_MM_3so?si=yEXq_aayiD-p9MeT'
      window.open(url,'_blank')
    }
    if(item == 'supportedRow'){
    const url = 'https://www.youtube.com/watch?v=Ar74l1V-dcs?si=YZDIkOfwlh-tGmH'
    window.open(url, '_blank');
    }
    if(item == 'lateralRaise'){
      const url = 'https://www.youtube.com/watch?v=OQffhovrMWg?si=ZGn4BDSTyEXBJtNf'
      window.open(url, '_blank');
    }
  }
}

