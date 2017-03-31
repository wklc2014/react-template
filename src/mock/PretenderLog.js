import moment from 'moment';

export default function (api) {
    console.groupCollapsed('%c PretenderLog', 'color: blue');
    console.info(`%c ajax time`, 'color: orange', moment().format('hh:mm:ss SSS'));
    console.info(`%c ajax path`, 'color: orange', api.url);
    console.info(`%c ajax method`, 'color: orange', api.method);
    console.groupEnd();
}