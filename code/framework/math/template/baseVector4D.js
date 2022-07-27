const BaseVector3D = require('./baseVector3D.js');

module.exports=
    class BaseVector4D
        extends BaseVector3D
    {
        constructor( x, y, z, w )
        {
            super( x, y, z );

        }
    }