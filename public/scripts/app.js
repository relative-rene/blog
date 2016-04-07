console.log("Sanity Check: JS is working!");
var allEvents =[], $eventList=$('#eventList');
$(document).ready(function(){
submit();
cancel();
});

function submit(){
$('#addEvent').on('submit',function(event){
  event.preventDefault();
  console.log('new event serialized', $(this).serializeArray());
  $.ajax({
    method: "POST",
    url:'/api/events/',
    data: $(this).serializeArray(),
    success: newEventSuccess,
    error: newEventSuccess
  });
});
}
function cancel(){
  $('#eventList').on('click', '.deleteBtn', function() {
    console.log('clicked Delete', '/api/events/'+$(this).attr(req.body.id));
    $.ajax({
      method: 'DELETE',
      url: '/api/events/'+$(this).attr(req.body.id),
      success: deleteEventSuccess,
      error: deleteEventError
    });
});
}
// helper function to render  posts to view
// note: we empty and re-render the collection each time our post data changes
function render () {
  // empty existing posts from view
  $eventList.empty();

  // append html to the view
  $eventList.append("<li>"+$('.eventInfo').val()+"</li>");
}

function handleSuccess(json) {
  var allEvents = json;
  render();
}

function handleError(event) {
  console.log('their was an error loading event');
  $('#eventList').text('Failed to load event, is the server busy??');
}

function newEventSuccess(json) {
  $('#profileBuilder').val('');//possibly needs space then "input"
  allEvents.push(json);
  render();
}

function deleteEventSuccess(json) {
  var event = json;
  console.log(json);
  var eventId = event._id;
  console.log('Event deleted', eventId);
  // find the event with the correct ID and remove it from our allEvents array
  for(var index = 0; index < allEvents.length; index++) {
    if(allEvents[index]._id === eventId) {
      allEvents.splice(index, 1);
      break;  // when event found, the search stops
    }
  }
  render();
}

function deleteEventError() {
  console.log('Event canceling error');
}

function newEventSuccess(json) {
  var event = json;
  var eventId = event._id;
  // find the event with the correct ID and update it
  for(var index = 0; index < allEvents.length; index++) {
    if(allEvents[index]._id === eventId) {
      allEvents[index] = event;
      break;
    }
  }
  render();
}

function newEventError() {
  console.log('Their was an error with your event request');
}
