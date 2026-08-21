"use client";
import { FunctionComponent } from "react";
import FullscreenToggle from "./FullscreenToggle";
import OpenCurrentView from "./OpenCurrentView";
import OpenTours from "./OpenTours";
import Share from "./Share";
import ShareTour from "./ShareTour";

type ContextualActionsProps = {
    showFullscreenAction?: boolean;
    showOpenToursAction?: boolean;
    showShareAction?: boolean;
    shareEmbed?: boolean;
    showOpenCurrentViewAction?: boolean;
    showShareTourAction?: boolean;
}

const ContextualActions: FunctionComponent<ContextualActionsProps> = ({ 
    showFullscreenAction = false,
    showOpenToursAction = false,
    showShareAction = false,
    shareEmbed = false,
    showOpenCurrentViewAction = false,
    showShareTourAction = false
}) => {
    return (
        <>
            { showOpenToursAction && <OpenTours/> }
            { showOpenCurrentViewAction && <OpenCurrentView/> }
            { showFullscreenAction && <FullscreenToggle/> }
            { showShareAction && <Share embed={shareEmbed}/> }
            { showShareTourAction && <ShareTour/>}
        </>
    )
}

export default ContextualActions;