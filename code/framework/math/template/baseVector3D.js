const BaseVector2D = require('./baseVector2D.js');

module.exports=
    class BaseVector3D
        extends BaseVector2D
    {
        constructor( x, y, z )
        {
            super(x, y)
        }
    }