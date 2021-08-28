
 function clock() {

    dayEl.text(moment().format('LL'));
    timeEl.text(moment().format('hh:mm:ssA'));
    $('.jumbotron').append(dayEl);
    $('.jumbotron').append(timeEl);

}
    (function checkingTime() {
  
        if (parseInt(box12.attr('data-hour')) > timeNow) {
            box12.removeClass('past present future');
            box12.addClass('future');
        } else if (parseInt(box12.attr('data-hour')) === timeNow) {
            box12.removeClass('past present future');
            box12.addClass('present');
        } else {
            box12.removeClass('past present future');
            box12.addClass('past'); 
        }
  

        if (parseInt(box1.attr('data-hour')) > timeNow) {
            box1.removeClass('past present future');
            box1.addClass('future')
  
        } else if (parseInt(box1.attr('data-hour')) === timeNow) {
            box1.removeClass('past present future');
            box1.addClass('present');
        } else {
            box1.removeClass('past present future');
            box1.addClass('past');
        }
  
        if (parseInt(box2.attr('data-hour')) > timeNow) {
            box2.removeClass('past present future');
            box2.addClass('future');
        } else if (parseInt(box2.attr('data-hour')) === timeNow) {
            box2.removeClass('past present future');
            box2.addClass('present');
        } else {
            box2.removeClass('past present future');
            box2.addClass('past');
        }
  
        if (parseInt(box3.attr('data-hour')) > timeNow) {
            box3.removeClass('past present future');
            box3.addClass('future');
        } else if (parseInt(box3.attr('data-hour')) === timeNow) {
            box3.removeClass('past present future');
            box3.addClass('present');
        } else {
            box3.removeClass('past present future');
            box3.addClass('past');
  
        }
  
        if (parseInt(box4.attr('data-hour')) > timeNow) {
            box4.removeClass('past present future');
            box4.addClass('future');
        } else if (parseInt(box4.attr('data-hour')) === timeNow) {
            box4.removeClass('past present future');
            box4.addClass('present');
        } else {
            box4.removeClass('past present future');
            box4.addClass('past');
        }
  
        if (parseInt(box5.attr('data-hour')) > timeNow) {
            box5.removeClass('past present future');
            box5.addClass('future');
        } else if (parseInt(box5.attr('data-hour')) === timeNow) {
            box5.removeClass('past present future');
            box5.addClass('present');
        } else {
            box5.removeClass('past present future');
            box5.addClass('past');
        }
  
        if (parseInt(box9.attr('data-hour')) > timeNow) {
            box9.removeClass('past present future');
            box9.addClass('future');
        } else if (parseInt(box9.attr('data-hour')) === timeNow) {
            box9.removeClass('past present future');
            box9.addClass('present');
        } else {
            box9.removeClass('past present future');
            box9.addClass('past');
        }
  
        if (parseInt(box10.attr('data-hour')) > timeNow) {
            box10.removeClass('past present future');
            box10.addClass('future');
        } else if (parseInt(box10.attr('data-hour')) === timeNow) {
            box10.removeClass('past present future');
            box10.addClass('present');
        } else {
            box10.removeClass('past present future');
            box10.addClass('past');
        }
  
        if (parseInt(box11.attr('data-hour')) > timeNow) {
            box11.removeClass('past present future');
            box11.addClass('future');
        } else if (parseInt(box11.attr('data-hour')) === timeNow) {
            box11.removeClass('past present future');
            box11.addClass('present');
        } else {
            box11.removeClass('past present future');
            box11.addClass('past');
        }
        }
  
    button9.on('click', function() {
        text.prtextDefault();
        if (box9.val() !== '') {
            localStorage.setItem('text9', box9.val());
        }
    });
  
    button10.on('click', function() {
        text.prtextDefault();
        if (box10.val() !== '') {
            localStorage.setItem('text10', box10.val());    
            }
    });
  
    button11.on('click', function() {
        text.prtextDefault();
        if (box11.val() !== '') {
            localStorage.setItem('text11', box11.val());
            }
    });
  
    button12.on('click', function() {
        text.prtextDefault();
        if (box12.val() !== '') {
            localStorage.setItem('text12', box12.val());
            }
    });

    
  checkingTime();
    
  function checkState() {
    $(".hour").each(function(){
        var hour = this.id.split("hour")[1];
        //console.log(moment().format("H"))
        console.log(moment(hour,"H").format("ha"))
        if (moment(hour, "ha").isBefore(now, "h")) {
            $(this).siblings(0).addClass("past")
        } else if (moment(hour, "ha").isSame(now, "h")) {
            $(this).siblings(0).addClass("present")
        } else {
            $(this).siblings(0).addClass("future")
        }
    })
});
 
