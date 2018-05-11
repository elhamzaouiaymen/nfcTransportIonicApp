export class DateUtils {

    static getPeriodBetween(start: any, end: any): any{
        var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds    
        return  Math.round(Math.abs((start.getTime() - end.getTime())/(oneDay)));
       
    }
}