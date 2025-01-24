import Markdown from 'react-markdown'

const Recipe = (props) => {
    return (
        <section className='suggested-recipe-container'>
            <Markdown>{props.recipe}</Markdown>            
        </section>
    )
}

export default Recipe