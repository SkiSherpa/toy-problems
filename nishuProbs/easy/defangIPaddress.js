/**
Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

Example 1:
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"

Example 2:
Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"

Constraints:
The given address is a valid IPv4 address.

 * @param {string} address
 * @return {string}
 */
// IP: string - IP address
// OP: string - with periods replaced with brackets around periods: . -> [.]

// tartget_string.replace(target, what to replace with)
// replace didnt work, tried splice didin't work, did it with slice

// slice off first half minus perioc
    // slice of back half minus current period
    // add first half + [.] + back half
var defangIPaddr = function(address) {
    let len = address.length
    for (let i = 0; i < len; i++) {
        if (address[i] === '.') {
            let front = address.slice(0, i);
            let back = address.slice(i+1, len);
            address = front.concat('[.]', back);
            i = i + 3;
            len = len + 3;
        }
    }
    return address;
};

console.log(defangIPaddr("1.1.1.1"), '  --  ', "1[.]1[.]1[.]1");
// Works
// concat - O(n+m), where n and m are the lengths of the two strs
// my concat - O(front.len + 3 + back.len) = O(n), where n = address.len + 2
// t = O(n^2), for loop with a nested O(n)
// m = O(1), constant vars being saved and reassigned

// replace does the first instance, there is a replaceAll()
const defangIPaddrSOL = address => address.replaceAll('.', '[.]');
