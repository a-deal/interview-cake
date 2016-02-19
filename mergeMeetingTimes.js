/*
TC : 0 (n log n)
SC : 0 (n)
*/

var mergeMeetingTimes = function (meetingTimes) {
    meetingTimes = meetingTimes.sort(function(a,b){ return a[0] - b[0]});
    var mergedMeetings = [];
    var currentStart = meetingTimes[0][0], currentEnd = meetingTimes[0][1]

    for ( var i = 1; i < meetingTimes.length; i++) {
        var start = meetingTimes[i][0], end = meetingTimes[i][1];
        if (start <= currentEnd && end > currentEnd) {
            currentEnd = end;
        }
        if (start > currentEnd || i === meetingTimes.length - 1) {
            mergedMeetings.push([currentStart, currentEnd]);
            currentStart = start, currentEnd = end;
        }
    }
    return mergedMeetings;
}

var times = [ [0, 1], [3, 5], [4, 8], [10, 12], [9, 10] ];
mergeMeetingTimes(times);
