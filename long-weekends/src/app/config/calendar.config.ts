import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';

export const calendarOptions: CalendarOptions = {
        initialView: 'dayGridMonth',
        plugins: [dayGridPlugin, listPlugin, bootstrap5Plugin],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,listMonth'
        },
        themeSystem: 'bootstrap5',
        // tuve que agregar los botones, más allá de la documentación no podía visualizar el contenido del boton si no lo hacía explícito
        buttonText: {
          prev: '<',
          next: '>', 
        },
        events: [
          { title: 'event 1', date: '2023-06-26' },
          { title: 'event 2', date: '2023-06-27' }
        ],
        eventColor: '#1b5ccc',
        eventBackgroundColor: 'light-blue'
      };