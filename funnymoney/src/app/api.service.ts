import { Injectable } from '@angular/core';
import {HttpClient}from  '@angular/common/http';
import { of, Observable } from 'rxjs';

const apikey= "614CAY3S4WQVWX15";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

getSymbol(symbol: string){
console.log("SYMBOL",symbol);
 //console.log(' https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + symbol + '&outputsize=compact&apikey=$(apikey)&datatype=json');
return this.http.get(' https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' + symbol + '&interval=1min&aoutputsize=compact&apikey=' + apikey + '&datatype=json');
// return this.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + symbol + '&outputsize=compact&apikey=' + apikey + '&datatype=json');
}

getallUsergnl(): Observable<any[]> {
  console.log('inservice getting a users gains and losses');
  return this.http.get<any[]>('/getallusergnl');
}
updateDailytotals(stock){
  console.log('inservice updating totals', stock);
  return this.http.post('/updatedailytotals',stock)
}

updateDailyGnL(gnl_obj){
  console.log('inservice updating gains n losses ', gnl_obj);
  return this.http.post('/updatedailygnl',gnl_obj)
}
getdailyTotals(): Observable<any[]> {
  console.log('inservice getting daily totals');
  return this.http.get<any[]>('/getalldailytotals');
}
getusersStock(): Observable<any[]> {
  console.log('inservice getting stocks');
  return this.http.get<any[]>('/getusersstock');
}
getSymbols(): Observable<any[]> {
  console.log('inservice getting stocks');
  return this.http.get<any[]>('/getallsymbols')
}
buyStock(stock){
  console.log('inservice buing stock', stock);
  return this.http.post('/buystock',stock)
}
sellStock(stock){
  console.log('inservice selling stock', stock);
  return this.http.post('/sellstock',stock)
}
getuserDailyGnL(userid, date): Observable<any[]> {
  console.log('inservice getting users daily g n l');
  return this.http.get<any[]>('/getuserdailygnl/'+userid+'/'+date);
}
findsym(sym) {
  console.log('finding symbol',sym);
  return this.http.get('/findsym/'+sym);
}


}