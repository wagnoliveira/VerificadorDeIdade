function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'boychild_round')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'boyyoung_round')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'man_round')
            } else {
                // idoso
                img.setAttribute('src', 'manold_round')
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'girlchild_round')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'girlyoung_round')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'woman_round')
            } else {
                // idosa
                img.setAttribute('src', 'womanolder_round')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${gen} de ${idade} anos.`
        res.appendChild(img)
    }
}