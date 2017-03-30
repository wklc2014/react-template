export default {
    fixedSessionStorage: name => {
        let ret = '';
        try {
            ret = sessionStorage.getItem(name);
        } catch (e) {}
        return ret;
    }
}