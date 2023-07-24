function calcularSalario(hora , valorHora){
    let salarioBruto = hora * valorHora
    // CALCULO DO IMPOSTO DE RENDA 
    let ir = 0 
    porcentagem = ''
    if (salarioBruto <= 900){
        ir = 0
        porcentagem = 'Insento'

    } else if (salarioBruto > 900 && salarioBruto <= 1500){
        ir = salarioBruto * 0.05 
        porcentagem = '5%'

    } else if (salarioBruto > 1500 && salarioBruto <= 2500){
        ir = salarioBruto * 0.10
        porcentagem = '10%'

    } else if (salarioBruto > 2500){
        ir = salarioBruto * 0.20
        porcentagem = '20%'
    }
    // CALCULO DO INSS 
    let inss = salarioBruto * 0.1

    // CALCULO DO FGTS
    let fgts = salarioBruto * 0.11
    
    // TOTAL DE DESCONTOS
    let totalDescontos = ir + inss

    // CALCULO DO SALARIO LIQUIDO
    let salarioLiquido = (salarioBruto - totalDescontos)

    console.log(`

    Salário Bruto ( ${hora} * ${valorHora} )                : R$ ${salarioBruto.toFixed(2).replace(".",",")}

    
    ( - ) IR ( ${porcentagem} )                          : R$ ${ir.toFixed(2).replace(".",",")}
    
    ( - ) INSS ( 10% )                       : R$ ${inss.toFixed(2).replace(".",",")}
    
    FGTS ( 11% )                             : R$ ${fgts.toFixed(2).replace(".",",")}

    
    TOTAL DE DESCONTOS                       : R$ ${totalDescontos.toFixed(2).replace(".",",")}
    
    SALÁRIO LÍQUIDO                          : R$ ${salarioLiquido.toFixed(2).replace(".",",")}
    
    `)
}

    
    calcularSalario(5, 220)