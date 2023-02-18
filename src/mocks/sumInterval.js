function sumIntervals(intervals) {
    // Sort the intervals by their start point
    intervals.sort((a, b) => a[0] - b[0]);
  
    let totalLength = 0;
    let currentStart = intervals[0][0];
    let currentEnd = intervals[0][1];
  
    for (let i = 1; i < intervals.length; i++) {
      const [start, end] = intervals[i];
  
      // If the current interval overlaps with the next interval
      if (currentEnd >= start) {
        // Update the end point of the current interval
        currentEnd = Math.max(currentEnd, end);
      } else {
        // Add the length of the current interval to the total length
        totalLength += currentEnd - currentStart;
  
        // Set the current interval to the next interval
        currentStart = start;
        currentEnd = end;
      }
    }
  
    // Add the length of the final interval to the total length
    totalLength += currentEnd - currentStart;
  
    return totalLength;
  }
  