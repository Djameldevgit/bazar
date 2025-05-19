
import Description from './Description';

const DescriptionPost = ({ post, readMore, setReadMore }) => {

    return (
        <div>


            <div className="description-container">




                <div className="post-info">
                    <div className="info-item">
                        <i className="fas fa-car"></i>
                        <span className="info-label mr-2">catégories:{post.category}</span>
                        <span className="info-label mr-2">Technique:{post.subcategory}</span>
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
                    {post.subcategory && (
                        <div className="info-item">
                            <i className="fas fa-calendar"></i>
                            <span className="info-label">Technique:</span>
                            <span className="info-value">{post.subcategory}</span>
                        </div>
                    )}
                    {post.theme && (
                        <div className="info-item">
                            <i className="fas fa-calendar"></i>
                            <span className="info-label">Theme:</span>
                            <span className="info-value">{post.theme}</span>
                        </div>
                    )}
                    {post.artStyle && (
                        <div className="info-item">
                            <i className="fas fa-calendar"></i>
                            <span className="info-label">Style </span>
                            <span className="info-value">{post.artStyle}</span>
                        </div>
                    )}


                    {post.sizes && (
                        <div className="info-item">
                            <i className="fas fa-calendar"></i>
                            <span className="info-label">Talle:</span>
                            <span className="info-value">{post.sizes}</span>
                        </div>
                    )}

                    {post.envolverobra && (
                        <div className="info-item">
                            <i className="fas fa-calendar"></i>
                            <span className="info-label">Conditionnement de l'œuvre</span>
                            <span className="info-value">{post.envolverobra}</span>
                        </div>
                    )}

                    {post.measurementValue && (
                        <div className="info-item">
                            <i className="fas fa-calendar"></i>
                            <span className="info-label">Mesure</span>
                            <span className="info-value">{post.measurementValue}</span>
                        </div>
                    )}

                    {post.venteOption && (
                        <div className="info-item">
                            <i className="fas fa-calendar"></i>
                            <span className="info-label">Options de commercialisation </span>
                            <span className="info-value">{post.venteOption}</span>
                        </div>
                    )}










                    {post.subCategorytalle && (
                        <div className="info-item">
                            <i className="fas fa-calendar"></i>
                            <span className="info-label">subCategorytalle</span>
                            <span className="info-value">{post.subCategorytalle}</span>
                        </div>
                    )}


                    {post.measurementUnit && (
                        <div className="info-item">
                            <i className="fas fa-calendar"></i>
                            <span className="info-label">Devise de vente</span>
                            <span className="info-value">{post.measurementUnit}</span>
                        </div>
                    )}
                    {post.description && (
                        <div className="info-item">
                            <i className="fas fa-calendar"></i>
                            <span className="info-label">Description</span>
                            <span className="info-value">{post.description}</span>
                        </div>
                    )}
                    {post.wilaya && (
                        <div className="info-item">
                            <i className="fas fa-calendar"></i>
                            <span className="info-label">wilaya</span>
                            <span className="info-value">{post.wilaya}</span>
                        </div>
                    )}
                    {post.commune && (
                        <div className="info-item">
                            <i className="fas fa-calendar"></i>
                            <span className="info-label">commune</span>
                            <span className="info-value">{post.commune}</span>
                        </div>
                    )}






                </div>
            </div>
        </div>
    );
};

export default DescriptionPost;
