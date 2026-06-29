import React from 'react';
import ReviewItemsOne from './ReviewItemsOne';
import ReviewItemsTwo from './ReviewItemsTwo';

function ReviewItems() {
    return (
        <div 
          className="relative flex items-center justify-center gap-4"
          style={{ 
            maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
          }}
        >
            {/* Scrolling content */}
            <ReviewItemsOne />
            <div className="hidden min-[420px]:block">
              <ReviewItemsTwo />
            </div>
        </div>
    );
}

export default ReviewItems;
