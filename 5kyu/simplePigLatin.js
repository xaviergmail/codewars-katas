// https://www.codewars.com/kata/520b9d2ad5c005041100000f
pigIt = s => s.split(" ").map(x => x.match(/\w+/) ? `${x.substr(1)}${x[0]}ay` : x).join(" ")
