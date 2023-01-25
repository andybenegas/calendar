import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store';

export const useCalendarStore = () => {

  const dispatch= useDispatch();
  const { events, activeEvent } = useSelector(state => state.calendar);

  const setActiveEvent = ( calendarEvent ) => {
    dispatch(onSetActiveEvent( calendarEvent ));
  };

  const startSavingEvent = async( calendarEvent ) => {
    //TODO: LLegar al backend
    if( calendarEvent._id ) {
      //Actualizando
      dispatch( onUpdateEvent({...calendarEvent}) );
    } else {
      //Creando
      dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }) );
    }
  }

  const startDeletingEvent = () => {
    //Llegar al backend
    dispatch( onDeleteEvent() );
  }

  return {
    //Properties
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,

    //Methods
    startDeletingEvent,
    setActiveEvent,
    startSavingEvent,
  }
};
