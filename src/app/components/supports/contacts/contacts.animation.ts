import {
  trigger,
  state,
  animate,
  transition,
  style,
  keyframes,
  group
} from '@angular/animations';

const ContactsAnimation = [
  trigger('owner', [
    transition('void => *', [
        animate('10s 0.5s', keyframes([
            style({
                transform: 'translateY(25px)',
                opacity: 0
            }),
            style({
                transform: 'translateY(50px)',
                opacity: 0.3
            }),
            style({
                transform: 'translateY(75px)',
                opacity: 0.6
            }),
            style({
                transform: 'translateY(100px)',
                opacity: 0.9
            }),
            style({
            transform: 'translateY(125px)',
            opacity: 1
            }),
            style({
            transform: 'translateY(150px)',
            opacity: 1
            }),
            style({
            transform: 'translateY(175px)',
            opacity: 1
            }),
            style({
            transform: 'translateY(200px)',
            opacity: 1
            }),
            style({
                transform: 'translateY(225px)',
                opacity: 1
            }),
            style({
                transform: 'translateY(250px)',
                opacity: 1
            }),
            style({
                transform: 'translateY(275px)',
                opacity: 1
            }),
            style({
              transform: 'translateY(300px)',
              opacity: 1
          }),
          style({
            transform: 'translateY(325px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(350px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(375px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(400px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(425px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(450px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(475px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(500px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(525px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(550px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(575px)',
            opacity: 0.9
          }),
          style({
            transform: 'translateY(600px)',
            opacity: 0.6
          }),
          style({
            transform: 'translateY(625px)',
            opacity: 0.3
          }),
          style({
            transform: 'translateY(650px)',
            opacity: 0
          }),
        ]))
    ]),
  ]),
  trigger('owner-username', [
    transition('void => *', [
        animate('10s 2.5s', keyframes([
            style({
                transform: 'translateY(0px)',
                opacity: 0
            }),
            style({
                transform: 'translateY(25px)',
                opacity: 0.3
            }),
            style({
                transform: 'translateY(50px)',
                opacity: 0.6
            }),
            style({
                transform: 'translateY(75px)',
                opacity: 0.9
            }),
            style({
            transform: 'translateY(100px)',
            opacity: 1
            }),
            style({
            transform: 'translateY(125px)',
            opacity: 1
            }),
            style({
            transform: 'translateY(150px)',
            opacity: 1
            }),
            style({
            transform: 'translateY(175px)',
            opacity: 1
            }),
            style({
                transform: 'translateY(200px)',
                opacity: 1
            }),
            style({
                transform: 'translateY(225px)',
                opacity: 1
            }),
            style({
                transform: 'translateY(250px)',
                opacity: 1
            }),
            style({
              transform: 'translateY(275px)',
              opacity: 1
          }),
          style({
            transform: 'translateY(300px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(325px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(350px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(375px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(400px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(425px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(450px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(475px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(500px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(525px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(550px)',
            opacity: 0.9
          }),
          style({
            transform: 'translateY(575px)',
            opacity: 0.6
          }),
          style({
            transform: 'translateY(600px)',
            opacity: 0.3
          }),
          style({
            transform: 'translateY(625px)',
            opacity: 0
          }),
        ]))
    ]),
  ]),
  trigger('owner-email', [
    transition('void => *', [
        animate('10s 4.5s', keyframes([
            style({
                transform: 'translateY(-25px)',
                opacity: 0
            }),
            style({
                transform: 'translateY(0px)',
                opacity: 0.3
            }),
            style({
                transform: 'translateY(25px)',
                opacity: 0.6
            }),
            style({
                transform: 'translateY(50px)',
                opacity: 0.9
            }),
            style({
            transform: 'translateY(75px)',
            opacity: 1
            }),
            style({
            transform: 'translateY(100px)',
            opacity: 1
            }),
            style({
            transform: 'translateY(125px)',
            opacity: 1
            }),
            style({
            transform: 'translateY(150px)',
            opacity: 1
            }),
            style({
                transform: 'translateY(175px)',
                opacity: 1
            }),
            style({
                transform: 'translateY(200px)',
                opacity: 1
            }),
            style({
                transform: 'translateY(225px)',
                opacity: 1
            }),
            style({
              transform: 'translateY(250px)',
              opacity: 1
          }),
          style({
            transform: 'translateY(275px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(300px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(325px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(350px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(375px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(400px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(425px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(450px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(475px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(500px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(525px)',
            opacity: 0.9
          }),
          style({
            transform: 'translateY(550px)',
            opacity: 0.6
          }),
          style({
            transform: 'translateY(575px)',
            opacity: 0.3
          }),
          style({
            transform: 'translateY(600px)',
            opacity: 0
          }),
        ]))
    ]),
  ]),
  trigger('owner-phone', [
    transition('void => *', [
        animate('10s 6.5s', keyframes([
            style({
                transform: 'translateY(-50px)',
                opacity: 0
            }),
            style({
                transform: 'translateY(-25px)',
                opacity: 0.3
            }),
            style({
                transform: 'translateY(0px)',
                opacity: 0.6
            }),
            style({
                transform: 'translateY(25px)',
                opacity: 0.9
            }),
            style({
            transform: 'translateY(50px)',
            opacity: 1
            }),
            style({
            transform: 'translateY(75px)',
            opacity: 1
            }),
            style({
            transform: 'translateY(100px)',
            opacity: 1
            }),
            style({
            transform: 'translateY(125px)',
            opacity: 1
            }),
            style({
                transform: 'translateY(150px)',
                opacity: 1
            }),
            style({
                transform: 'translateY(175px)',
                opacity: 1
            }),
            style({
                transform: 'translateY(200px)',
                opacity: 1
            }),
            style({
              transform: 'translateY(225px)',
              opacity: 1
          }),
          style({
            transform: 'translateY(250px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(275px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(300px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(325px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(350px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(375px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(400px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(425px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(450px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(475px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(500px)',
            opacity: 0.9
          }),
          style({
            transform: 'translateY(525px)',
            opacity: 0.6
          }),
          style({
            transform: 'translateY(550px)',
            opacity: 0.3
          }),
          style({
            transform: 'translateY(575px)',
            opacity: 0
          }),
        ]))
    ]),
  ]),
  trigger('admin', [
    transition('void => *', [
        animate('10s 10.2s', keyframes([
            style({
                transform: 'translateY(-75px)',
                opacity: 0
            }),
            style({
                transform: 'translateY(-50px)',
                opacity: 0.3
            }),
            style({
                transform: 'translateY(-25px)',
                opacity: 0.6
            }),
            style({
                transform: 'translateY(0)',
                opacity: 0.9
            }),
            style({
            transform: 'translateY(25px)',
            opacity: 1
            }),
            style({
            transform: 'translateY(50px)',
            opacity: 1
            }),
            style({
            transform: 'translateY(75px)',
            opacity: 1
            }),
            style({
            transform: 'translateY(100px)',
            opacity: 1
            }),
            style({
                transform: 'translateY(125px)',
                opacity: 1
            }),
            style({
                transform: 'translateY(150px)',
                opacity: 1
            }),
            style({
                transform: 'translateY(175px)',
                opacity: 1
            }),
            style({
              transform: 'translateY(200px)',
              opacity: 1
          }),
          style({
            transform: 'translateY(225px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(250px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(275px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(300px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(325px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(350px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(375px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(400px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(425px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(450px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(475px)',
            opacity: 0.9
          }),
          style({
            transform: 'translateY(500px)',
            opacity: 0.6
          }),
          style({
            transform: 'translateY(525px)',
            opacity: 0.3
          }),
          style({
            transform: 'translateY(550px)',
            opacity: 0
          }),
        ]))
    ]),
  ]),
  trigger('admin-username', [
    transition('void => *', [
        animate('10s 12.2s', keyframes([
            style({
                transform: 'translateY(-100px)',
                opacity: 0
            }),
            style({
                transform: 'translateY(-75px)',
                opacity: 0.3
            }),
            style({
                transform: 'translateY(-50px)',
                opacity: 0.6
            }),
            style({
                transform: 'translateY(-25px)',
                opacity: 0.9
            }),
            style({
            transform: 'translateY(0)',
            opacity: 1
            }),
            style({
            transform: 'translateY(25px)',
            opacity: 1
            }),
            style({
            transform: 'translateY(50px)',
            opacity: 1
            }),
            style({
            transform: 'translateY(75px)',
            opacity: 1
            }),
            style({
                transform: 'translateY(100px)',
                opacity: 1
            }),
            style({
                transform: 'translateY(125px)',
                opacity: 1
            }),
            style({
                transform: 'translateY(150px)',
                opacity: 1
            }),
            style({
              transform: 'translateY(175px)',
              opacity: 1
          }),
          style({
            transform: 'translateY(200px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(225px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(250px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(275px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(300px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(325px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(350px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(375px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(400px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(425px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(450px)',
            opacity: 0.9
          }),
          style({
            transform: 'translateY(475px)',
            opacity: 0.6
          }),
          style({
            transform: 'translateY(500px)',
            opacity: 0.3
          }),
          style({
            transform: 'translateY(525px)',
            opacity: 0
          }),
        ]))
    ]),
  ]),
  trigger('admin-email', [
    transition('void => *', [
        animate('10s 14.2s', keyframes([
            style({
                transform: 'translateY(-125px)',
                opacity: 0
            }),
            style({
                transform: 'translateY(-100px)',
                opacity: 0.3
            }),
            style({
                transform: 'translateY(-75px)',
                opacity: 0.6
            }),
            style({
                transform: 'translateY(-50px)',
                opacity: 0.9
            }),
            style({
            transform: 'translateY(-25px)',
            opacity: 1
            }),
            style({
            transform: 'translateY(0)',
            opacity: 1
            }),
            style({
            transform: 'translateY(25px)',
            opacity: 1
            }),
            style({
            transform: 'translateY(50px)',
            opacity: 1
            }),
            style({
                transform: 'translateY(75px)',
                opacity: 1
            }),
            style({
                transform: 'translateY(100px)',
                opacity: 1
            }),
            style({
                transform: 'translateY(125px)',
                opacity: 1
            }),
            style({
              transform: 'translateY(150px)',
              opacity: 1
          }),
          style({
            transform: 'translateY(175px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(200px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(225px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(250px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(275px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(300px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(325px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(350px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(375px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(400px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(425px)',
            opacity: 0.9
          }),
          style({
            transform: 'translateY(450px)',
            opacity: 0.6
          }),
          style({
            transform: 'translateY(475px)',
            opacity: 0.3
          }),
          style({
            transform: 'translateY(500px)',
            opacity: 0
          }),
        ]))
    ]),
  ]),
  trigger('admin-phone', [
    transition('void => *', [
        animate('10s 16.2s', keyframes([
            style({
                transform: 'translateY(-150px)',
                opacity: 0
            }),
            style({
                transform: 'translateY(-125px)',
                opacity: 0.3
            }),
            style({
                transform: 'translateY(-100px)',
                opacity: 0.6
            }),
            style({
                transform: 'translateY(-75px)',
                opacity: 0.9
            }),
            style({
            transform: 'translateY(-50px)',
            opacity: 1
            }),
            style({
            transform: 'translateY(-25px)',
            opacity: 1
            }),
            style({
            transform: 'translateY(0)',
            opacity: 1
            }),
            style({
            transform: 'translateY(25px)',
            opacity: 1
            }),
            style({
                transform: 'translateY(50px)',
                opacity: 1
            }),
            style({
                transform: 'translateY(75px)',
                opacity: 1
            }),
            style({
                transform: 'translateY(100px)',
                opacity: 1
            }),
            style({
              transform: 'translateY(125px)',
              opacity: 1
          }),
          style({
            transform: 'translateY(150px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(175px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(200px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(225px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(250px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(275px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(300px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(325px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(350px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(375px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(400px)',
            opacity: 0.9
          }),
          style({
            transform: 'translateY(425px)',
            opacity: 0.6
          }),
          style({
            transform: 'translateY(450px)',
            opacity: 0.3
          }),
          style({
            transform: 'translateY(475px)',
            opacity: 0
          }),
        ]))
    ]),
  ]),
  trigger('university', [
    transition('void => *', [
        animate('10s 20.2s', keyframes([
            style({
                transform: 'translateY(-200px)',
                opacity: 0
            }),
            style({
                transform: 'translateY(-175px)',
                opacity: 0.3
            }),
            style({
                transform: 'translateY(-150px)',
                opacity: 0.6
            }),
            style({
                transform: 'translateY(-125px)',
                opacity: 0.9
            }),
            style({
            transform: 'translateY(-100px)',
            opacity: 1
            }),
            style({
            transform: 'translateY(-75px)',
            opacity: 1
            }),
            style({
            transform: 'translateY(-50px)',
            opacity: 1
            }),
            style({
            transform: 'translateY(-25px)',
            opacity: 1
            }),
            style({
                transform: 'translateY(0)',
                opacity: 1
            }),
            style({
                transform: 'translateY(25px)',
                opacity: 1
            }),
            style({
                transform: 'translateY(50px)',
                opacity: 1
            }),
            style({
              transform: 'translateY(75px)',
              opacity: 1
          }),
          style({
            transform: 'translateY(100px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(125px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(150px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(175px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(200px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(225px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(250px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(275px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(300px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(325px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(350px)',
            opacity: 0.9
          }),
          style({
            transform: 'translateY(375px)',
            opacity: 0.6
          }),
          style({
            transform: 'translateY(400px)',
            opacity: 0.3
          }),
          style({
            transform: 'translateY(425px)',
            opacity: 0
          }),
        ]))
    ]),
  ]),
  trigger('university-logo', [
    transition('void => *', [
        animate('8.5s 23.2s', keyframes([
            style({
                transform: 'translateY(-250px)',
                opacity: 0
            }),
            style({
                transform: 'translateY(-225px)',
                opacity: 0.3
            }),
            style({
                transform: 'translateY(-200px)',
                opacity: 0.6
            }),
            style({
                transform: 'translateY(-175px)',
                opacity: 0.9
            }),
            style({
            transform: 'translateY(-150px)',
            opacity: 1
            }),
            style({
            transform: 'translateY(-125px)',
            opacity: 1
            }),
            style({
                transform: 'translateY(-100px)',
                opacity: 1
            }),
            style({
              transform: 'translateY(-75px)',
              opacity: 1
          }),
          style({
            transform: 'translateY(-50px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(-25px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(0)',
            opacity: 1
          }),
          style({
            transform: 'translateY(25px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(50px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(75px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(100px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(125)',
            opacity: 1
          }),
          style({
            transform: 'translateY(150px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(175px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(200px)',
            opacity: 0.9
          }),
          style({
            transform: 'translateY(225px)',
            opacity: 0.6
          }),
          style({
            transform: 'translateY(250px)',
            opacity: 0.3
          }),
          style({
            transform: 'translateY(275px)',
            opacity: 0
          }),
        ]))
    ]),
  ]),
  trigger('developer', [
    transition('void => *', [
        animate('10s 26.2s', keyframes([
            style({
                transform: 'translateY(-375px)',
                opacity: 0
            }),
            style({
                transform: 'translateY(-350px)',
                opacity: 0.3
            }),
            style({
                transform: 'translateY(-325px)',
                opacity: 0.6
            }),
            style({
                transform: 'translateY(-300px)',
                opacity: 0.9
            }),
            style({
            transform: 'translateY(-275px)',
            opacity: 1
            }),
            style({
            transform: 'translateY(-250px)',
            opacity: 1
            }),
            style({
            transform: 'translateY(-225px)',
            opacity: 1
            }),
            style({
            transform: 'translateY(-200px)',
            opacity: 1
            }),
            style({
                transform: 'translateY(-175px)',
                opacity: 1
            }),
            style({
                transform: 'translateY(-150px)',
                opacity: 1
            }),
            style({
                transform: 'translateY(-125px)',
                opacity: 1
            }),
            style({
              transform: 'translateY(-100px)',
              opacity: 1
          }),
          style({
            transform: 'translateY(-75px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(-50px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(-25px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(0)',
            opacity: 1
          }),
          style({
            transform: 'translateY(25px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(50px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(75px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(100px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(125px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(150px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(175px)',
            opacity: 0.9
          }),
          style({
            transform: 'translateY(200px)',
            opacity: 0.6
          }),
          style({
            transform: 'translateY(225px)',
            opacity: 0.3
          }),
          style({
            transform: 'translateY(250px)',
            opacity: 0
          }),
        ]))
    ]),
  ]),
  trigger('developer-logo', [
    transition('void => *', [
        animate('8.5s 29.2s', keyframes([
            style({
                transform: 'translateY(-450px)',
                opacity: 0
            }),
            style({
                transform: 'translateY(-425px)',
                opacity: 0.3
            }),
            style({
                transform: 'translateY(-400px)',
                opacity: 0.6
            }),
            style({
                transform: 'translateY(-375px)',
                opacity: 0.9
            }),
            style({
            transform: 'translateY(-350px)',
            opacity: 1
            }),
            style({
            transform: 'translateY(-325px)',
            opacity: 1
            }),
            style({
                transform: 'translateY(-300px)',
                opacity: 1
            }),
            style({
              transform: 'translateY(-275px)',
              opacity: 1
          }),
          style({
            transform: 'translateY(-250px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(-225px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(-200px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(-175px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(-150px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(-125px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(-100px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(-75px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(-50px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(-25px)',
            opacity: 1
          }),
          style({
            transform: 'translateY(0px)',
            opacity: 0.9
          }),
          style({
            transform: 'translateY(25px)',
            opacity: 0.6
          }),
          style({
            transform: 'translateY(50px)',
            opacity: 0.3
          }),
          style({
            transform: 'translateY(75px)',
            opacity: 0
          }),
        ]))
    ]),
  ]),
];

export { ContactsAnimation };

