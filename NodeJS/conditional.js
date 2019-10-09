console.log('This is same? ', 1 === '1');
//1 === '1' //false
//1 == '1' //true

//1. if
if (1>0) {
    console.log('[IF] Satu lebh dari nol');
}

//2. If else
if (1 != 1) {
    console.log('[IF:ELSE] 1 tidak sama dengan 1');
} else {
    console.log('[IF:ELSE] 1 sama dengan 1');
}

//3. if else if
if (1!= 1) {
    console.log('[IF:ELSE IF] 1 tidak sama dengan 1');
} else if ( 1>1) {
    console.log('[IF:ELSE IF] tapa 1 lebih dari 0');
}

//4. if - else if - else
if (1!= 1) {
    console.log('[IF:ELSE IF:ELSE] 1 tidak sama dengan 1');
} else if ( 1>1) {
    console.log('[IF:ELSE IF:ELSE] tapa 1 lebih dari 0');
} else {
    console.log('[IF:ELSE IF:ELSE] take everything');
}

//5. If Bersarang
if (1 > 0) {
    console.log('true');
    if (2 > 1)
    console.log('true again');
}
console.log('yang 2 > 1 bisa jadi salah');

if (1 > 0) {
    console.log('ternyata benar');
    if (2 > 1) {
        console.log('2 lebih dari 1');
        if (3 > 2) {
            if (4 > 5) {
                if (5 > 4) {

                } else {

                }
            } else if (6 > 5) {

            }
        } else {
            
        }
    }
    console.log('yang 2 > 1 bisa jadi salah');
}

console.log("Add git")
console.log("Add git")
