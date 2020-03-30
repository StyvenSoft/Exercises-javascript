// Dado el porcentaje de ADN compartido entre dos personas, puede calcular su probable relación familiar .
const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.'
    }
    else if (percentSharedDNA > 34 && percentSharedDNA < 100) {
        return 'You are likely parent and child or full siblings.'
    }
    else if (percentSharedDNA > 13 && percentSharedDNA < 35) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    }
    else if (percentSharedDNA > 5 && percentSharedDNA < 14) {
        return 'You are likely 1st cousins.'
    }
    else if (percentSharedDNA > 2 && percentSharedDNA < 6) {
        return 'You are likely 2nd cousins.'
    }
    else if (percentSharedDNA > 0 && percentSharedDNA < 3) {
        return 'You are likely 3rd cousins'
    }
    return 'You are likely not related.'
}

console.log(whatRelation(35))
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

console.log(whatRelation(3))
// Should print 'You are likely 2nd cousins.'