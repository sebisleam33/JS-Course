let names = ["sebi", "dragos", "ana", "ama"]

let students = names.filter(name => name != "sebi")
                        .map(name => name.toUpperCase())
                        .sort()
                        .reverse()

console.log(students)