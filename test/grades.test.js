// const getGrade = require('../src/grades')


// describe('getGrade', () => {

//     it.each([
//         ['A+',100],
//         ['A+',99],
//         ['A+',98],
//         ['A+',97],
//         ['A',96],
//         ['A',95],
//         ['A',94],
//         ['A',93],
//         ['A-',92],
//         ['A-',91],
//         ['A-',90],
//         ['B+',89],
//         ['B+',88],
//         ['B+',87],
//         ['B',86],
//         ['B',85],
//         ['B',84],
//         ['B',83],
//         ['B-',82],
//         ['B-',81],
//         ['B-',80],
//         ['C+',79],
//         ['C+',78],
//         ['C+',77],
//         ['C',76],
//         ['C',75],
//         ['C',74],
//         ['C',73],
//         ['C-',72],
//         ['C-',71],
//         ['C-',70],
//         ['D',79],
//         ['D',78],
//         ['D',77],
//         ['D',76],
//         ['D',75],
//         ['D',74],
//         ['D',73],
//         ['D',72],
//         ['D',71],
//         ['D',70]       
//     ])
//     ('should return a grade of %s for a score of %n ', (letter,score) => {
//         const grade = getGrade(score)
//         //expect(grade).toEqual(letter)
//     })

//     it('should return an F for any score under 70', () => {
//         for (let i = 69; i > 0; i--) {
//            // expect(getGrade(i)).toEqual('F')
//         }
//     })

    
// })