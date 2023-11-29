import Boton from "./Boton";

export default function PanelBotones ({clickHandle}) {

    const handleClick = nombreDeBoton => clickHandle(nombreDeBoton);

    return(
        <div>
            <div>
                <button name="AC" clickHandle={handleClick} />
                <button name="+/-" clickHandle={handleClick} />
                <button name="%" clickHandle={handleClick} />
                <button name="/" clickHandle={handleClick} />
            </div>
            <div>
                <button name="7" clickHandle={handleClick} />
                <button name="8" clickHandle={handleClick} />
                <button name="9" clickHandle={handleClick} />
                <button name="x" clickHandle={handleClick} />
            </div>
            <div>
                <button name="4" clickHandle={handleClick} />
                <button name="5" clickHandle={handleClick} />
                <button name="6" clickHandle={handleClick} />
                <button name="-" clickHandle={handleClick} />
            </div>
            <div>
                <button name="1" clickHandle={handleClick} />
                <button name="2" clickHandle={handleClick} />
                <button name="3" clickHandle={handleClick} />
                <button name="+" clickHandle={handleClick} />
            </div>
            <div>
                <button name="0" clickHandle={handleClick} />
                <button name="." clickHandle={handleClick} />
                <button name="=" clickHandle={handleClick} />
                <button name="//" clickHandle={handleClick} />
            </div>
        </div>
    )


}