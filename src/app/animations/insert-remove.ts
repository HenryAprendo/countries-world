import { trigger, style, animate, transition } from "@angular/animations";

export const myInsertRemove = trigger('myInsertRemoveTrigger',[
  transition(':enter', [
    style({ opacity: 0}),
    animate('200ms', style({ opacity: 1})),
  ]),
  transition(':leave', [
    animate('500ms', style({ opacity: 0}))
  ])
]);
