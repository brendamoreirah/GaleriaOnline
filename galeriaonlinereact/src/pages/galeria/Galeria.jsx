import "./Galeria.css"
import icon from "../../assets/img/upload.svg"
import { Botao } from "../../componetns/botao/Botao"
import { Card } from "../../componetns/card/Card"


export const Galeria = () => {
    return(
        <>
            <h1 className="tituloGaleria">Galeria Online</h1>
            <form className="formulario" onSubmit="">
                <div className="campoNome">
                    <label>Nome</label>
                    <input type="text" className='inputNome'/>
                </div>
                <div className="campoImagem">
                    <label className='arquivoLabel'>
                        <i><img src={icon} alt='Icone de upload de imagem'/></i>
                        <input type='file' className='arquivoInput'/>
                    </label>
                </div>
                <Botao nomeBotao="Cadastrar"/>
            </form>

            <div className="campoCards">
                <Card tituloCard="Cachorro goldem"/>
                <Card tituloCard="Cachorro goldem"/>
                <Card tituloCard="Cachorro goldem"/>
                <Card tituloCard="Cachorro goldem"/>
                <Card tituloCard="Cachorro goldem"/>
                <Card tituloCard="Cachorro goldem"/>
                <Card tituloCard="Cachorro goldem"/>
                <Card tituloCard="Cachorro goldem"/>
                <Card tituloCard="Cachorro goldem"/>
                <Card tituloCard="Cachorro goldem"/>
                <Card tituloCard="Cachorro goldem"/>
                <Card tituloCard="Cachorro goldem"/>
                <Card tituloCard="Cachorro goldem"/>
                <Card tituloCard="Cachorro goldem"/>
            </div>
        </>
    )
}