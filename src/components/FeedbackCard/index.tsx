import { ThumbsDown, ThumbsUp } from "lucide-react";
import { IFeedbackCardProps } from "./types";

export const FeedbackCard: React.FC<IFeedbackCardProps> = ({
    content,
    variant,
}) => {
    const isLike = variant === "like";
    
    const getVariantClasses = () => {
        if (isLike) {
            return {
                container: "bg-green-50 text-green-600",
                icon: "text-green-600",
                text: "text-green-700"
            };
        }

        return {
            container: "bg-red-50 text-red-600",
            icon: "text-red-600",
            text: "text-red-700"
        };
    };

    const Icon = isLike ? ThumbsUp : ThumbsDown;

    return (
        <div className={`flex flex-col items-center rounded-xl w-32 gap-2 p-2 ${getVariantClasses().container}`}>
            <Icon size={48} className={getVariantClasses().icon} strokeWidth={3} />

            <div className="text-center">
                <p className={`font-semibold text-sm ${getVariantClasses().text}`}>
                    {content}
                </p>
            </div>
        </div>
    );
};