const BaseVector3D = require('./baseVector3D.js');

module.exports=
    class BaseVector4D
        extends BaseVector3D
    {
        constructor( x, y, z, W )
        {
            super( x, y, z );
            this.w = W;
        }

        get W()
        {
            return this.w;
        }

        set W(value)
        {
            this.w = value;
        }
    }