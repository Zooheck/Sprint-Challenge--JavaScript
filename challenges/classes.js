// 1. Copy and paste your prototype in here and refactor into class syntax.


class CuboidMakerClass {
    constructor(cuboidAttributes) {
        this.length = cuboidAttributes.length;
        this.width = cuboidAttributes.width;
        this.height = cuboidAttributes.height;
    }
    volume() {
        return (this.length * this.width * this.height);
      }
    surfaceArea() {
        return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
      }
  }


//   CuboidMaker.prototype.volume = function() {
//     return (this.length * this.width * this.height);
//   }


//   CuboidMaker.prototype.surfaceArea = function() {
//     return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
//   }

  const cuboidClass = new CuboidMakerClass({
    length: 4,
    width: 5,
    height: 5
  })
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidClass.volume()); // 100
console.log(cuboidClass.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension
// properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMakerClass {
  constructor(cubeAttributes) {
    super(cubeAttributes);
  }
}

let cubeTest = new CubeMaker({
  length: 3,
  width: 3,
  height: 3,
})

console.log(cubeTest.volume());
console.log(cubeTest.surfaceArea());