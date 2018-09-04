import { 
    trigger,
    state,
    animate,
    transition,
    style,
    keyframes,
    group
   } from '@angular/animations';

   const SpecialThanksAnimations = [
        trigger('list1', [
            transition("void => *", [
                animate(4000, keyframes([
                    style({
                        transform: 'translateX(-250px)',
                        opacity: 0
                    }),
                    style({
                        transform: 'translateX(-225px)',
                        opacity: 0.1
                    }),
                    style({
                        transform: 'translateX(-200px)',
                        opacity: 0.2
                    }),
                    style({
                        transform: 'translateX(-175px)',
                        opacity: 0.3
                    }),
                    style({
                    transform: 'translateX(-150px)',
                    opacity: 0.4
                    }),
                    style({
                    transform: 'translateX(-125px)',
                    opacity: 0.5
                    }),
                    style({
                    transform: 'translateX(-100px)',
                    opacity: 0.6
                    }),
                    style({
                    transform: 'translateX(-75px)',
                    opacity: 0.7
                    }),
                    style({
                        transform: 'translateX(-50px)',
                        opacity: 0.8
                    }),
                    style({
                        transform: 'translateX(-25px)',
                        opacity: 0.9
                    }),
                    style({
                        transform: 'translateX(0px)',
                        opacity: 1
                    }),
                ]))
            ]),
            transition('* => void', [
                group([
                  animate(4000, style({
                    color: 'red'
                  })),
                  animate(2000, style({
                    transform: 'translateX(100px)',
                    opacity: 0
                   }))
                ])
              ])
          
        ]),
        trigger('list2', [
            transition("void => *", [
                animate(4000, keyframes([
                    style({
                        transform: 'translateX(250px)',
                        opacity: 0
                        }),
                    style({
                        transform: 'translateX(225px)',
                        opacity: 0.1
                    }),
                    style({
                        transform: 'translateX(200px)',
                        opacity: 0.2
                    }),
                    style({
                        transform: 'translateX(175px)',
                        opacity: 0.3
                    }),
                    style({
                        transform: 'translateX(150px)',
                        opacity: 0.4
                    }),
                    style({
                        transform: 'translateX(125px)',
                        opacity: 0.5
                    }),
                    style({
                        transform: 'translateX(100px)',
                        opacity: 0.6
                    }),
                    style({
                        transform: 'translateX(75px)',
                        opacity: 0.7
                    }),
                    style({
                        transform: 'translateX(50px)',
                        opacity: 0.8
                    }),
                    style({
                        transform: 'translateX(25px)',
                        opacity: 0.9
                    }),
                    style({
                        transform: 'translateX(0px)',
                        opacity: 1
                    }),
                ])),

            ]),
            transition('* => void', [
                group([
                  animate(4000, style({
                    color: 'red'
                  })),
                  animate(2000, style({
                    transform: 'translateX(100px)',
                    opacity: 0
                   }))
                ])
              ])
        ])
       
   ];

   export { SpecialThanksAnimations }