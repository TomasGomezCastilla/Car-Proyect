import { NgModule, Injector } from '@angular/core';
import {
 HttpModule, XHRBackend, BrowserXhr,
 ResponseOptions, XSRFStrategy
} from '@angular/http';
import {
 InMemoryDbService
} from 'angular-in-memory-web-api';
import { AppInMemoryApi } from '../../in-memory-api/app-in-memory-api.service'
import { environment } from '../../../environments/environment';
export function getXHRBackend(injector: Injector, browser: BrowserXhr,
 xsrf: XSRFStrategy, options: ResponseOptions): any {
 if (environment.production) {
 return new XHRBackend(browser, options, xsrf);
 } else {
 }
}
@NgModule({
 imports: [HttpModule],
 providers: [
 {
 provide: XHRBackend,
 useFactory: getXHRBackend,
 deps: [Injector, BrowserXhr, XSRFStrategy, ResponseOptions]
 }
 ]
})
export class AppHttpModule {
}