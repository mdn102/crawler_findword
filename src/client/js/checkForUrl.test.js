import {
    checkForUrl
} from './checkForUrl'

describe('test url', () => {
    it('returns a valid url', () => {
        expect(checkForUrl('https://github.com/')).toBe(true);
    });
    it('it doen;t return a valid url', () => {
        expect(checkForUrl("hello")).toBe(false);
    });
});

// function validate() {
//     var url = document.getElementById("url").value;

//     if (pattern.test(url)) {
//         alert("Url is valid");
//         return true;
//     }
//         alert("Url is not valid!");
//         return false;
// }

// var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;