
import Description from './Description';
 
const DescriptionPost = ({ post, readMore, setReadMore }) => {

    return (
        <div>
      
       
        <div className="description-container">


 

            <div className="post-info">
                <div className="info-item">
                    <i className="fas fa-car"></i>
                    <span className="info-label mr-2">{post.subCategory}</span>
                    <span className="info-label mr-2">{post.attributes.subCategory2}</span>
                    <span className="info-label mr-2">{post.title}</span>

                </div>

                <div className="info-item">
                    <i className="fas fa-calendar-alt"></i>
                    <span className="info-label">Publié le:</span>
                    <span className="info-value">{new Date(post.createdAt).toLocaleDateString()} à {new Date(post.createdAt).toLocaleTimeString()}</span>
                </div>

                <div className="info-item">
                    <i className="fas fa-sync-alt"></i>
                    <span className="info-label">Actualisé le:</span>
                    <span className="info-value">{new Date(post.updatedAt).toLocaleDateString()} à {new Date(post.updatedAt).toLocaleTimeString()}</span>
                </div>

                {(post.vistas || []).length > 0 && (
                    <div className="info-item">
                        <i className="fas fa-eye"></i>
                        <span className="info-label">Vue:</span>
                        <span className="info-value">{post.vistas}</span>
                    </div>
                )}
                {post.attributes.subCategory2 && (
                    <div className="info-item">
                        <i className="fas fa-calendar"></i>
                        <span className="info-label">subCategory2</span>
                        <span className="info-value">{post.attributes.subCategory2}</span>
                    </div>
                )}
                  {post.attributes.title && (
                    <div className="info-item">
                        <i className="fas fa-calendar"></i>
                        <span className="info-label">title</span>
                        <span className="info-value">{post.attributes.title}</span>
                    </div>
                )}

{post.attributes.title2 && (
                    <div className="info-item">
                        <i className="fas fa-calendar"></i>
                        <span className="info-label">title2</span>
                        <span className="info-value">{post.attributes.title2}</span>
                    </div>
                )}
 {post.attributes.marque && (
                    <div className="info-item">
                        <i className="fas fa-calendar"></i>
                        <span className="info-label">marque</span>
                        <span className="info-value">{post.attributes.marque}</span>
                    </div>
                )}
                {post.attributes.model && (
                    <div className="info-item">
                        <i className="fas fa-road"></i>
                        <span className="info-label">model:</span>
                        <span className="info-value">{post.attributes.model} </span>
                    </div>
                )}
                {post.price && (
                    <div className="info-item">
                        <i className="fas fa-calendar"></i>
                        <span className="info-label">price</span>
                        <span className="info-value">{post.price}</span>
                    </div>
                )}

{post.unidaddeprecio && (
                    <div className="info-item">
                        <i className="fas fa-calendar"></i>
                        <span className="info-label">unidaddeprecio</span>
                        <span className="info-value">{post.unidaddeprecio}</span>
                    </div>
                )}
           {post.oferta && (
                    <div className="info-item">
                        <i className="fas fa-calendar"></i>
                        <span className="info-label">oferta</span>
                        <span className="info-value">{post.oferta}</span>
                    </div>
                )}
           {post.change && (
                    <div className="info-item">
                        <i className="fas fa-calendar"></i>
                        <span className="info-label">change</span>
                        <span className="info-value">{post.change}</span>
                    </div>
                )}
           {post.quartier && (
                    <div className="info-item">
                        <i className="fas fa-calendar"></i>
                        <span className="info-label">quartier</span>
                        <span className="info-value">{post.quartier}</span>
                    </div>
                )}





                {post.attributes.marca && (
                    <div className="info-item">
                        <i className="fas fa-calendar"></i>
                        <span className="info-label">marca</span>
                        <span className="info-value">{post.attributes.marca}</span>
                    </div>
                )}
                {post.attributes.modelo && (
                    <div className="info-item">
                        <i className="fas fa-road"></i>
                        <span className="info-label">modelo:</span>
                        <span className="info-value">{post.attributes.modelo} Km</span>
                    </div>
                )}
                {post.attributes.marcas && (
                    <div className="info-item">
                        <i className="fas fa-cogs"></i>
                        <span className="info-label">marcas:</span>
                        <span className="info-value">{post.attributes.marcas}</span>
                    </div>
                )}
                {post.attributes.modelos && (
                    <div className="info-item">
                        <i className="fas fa-gas-pump"></i>
                        <span className="info-label">modelos:</span>
                        <span className="info-value">{post.attributes.modelos}</span>
                    </div>
                )}
                {post.attributes.title2 && (
                    <div className="info-item">
                        <i className="fas fa-tachometer-alt"></i>
                        <span className="info-label">title2:</span>
                        <span className="info-value">{post.attributes.title2}</span>
                    </div>
                )}


                <Description post={post} readMore={readMore} setReadMore={setReadMore} />




 </div>
            </div>
        </div>
    );
};

export default DescriptionPost;
