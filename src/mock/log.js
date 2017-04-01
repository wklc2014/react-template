import moment from 'moment';

export default function (req) {
    console.groupCollapsed('%c PretenderLog', 'color: blue');
    console.info(`%c ajax time`, 'color: orange', moment().format('hh:mm:ss SSS'));
    console.info(`%c ajax path`, 'color: orange', req.url);
    console.info(`%c ajax method`, 'color: orange', req.method);
    console.info(`%c ajax status`, 'color: orange', req.status);
    console.groupEnd();
}