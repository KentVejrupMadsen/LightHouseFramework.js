const BaseVector1D = require('./baseVector1D.js');

module.exports=
    class BaseVector2D
        extends BaseVector1D
    {
        constructor( x, y )
        {
            super( x );
        }
    }