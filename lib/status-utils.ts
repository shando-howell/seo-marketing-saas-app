import {
    Clock,
    CheckCircle,
    XCircle,
    BarChart3,
    HardDriveDownload
} from "lucide-react";

export function getSpinnerColor(status: string): string {
    const statusConfig = {
        pending: "text-yellow-600 dark:text-yellow-400",
        running: "text-blue-600 dark:text-blue-400",
        analyzing: "text-purple-600 dark:text-purple-400"
    };

    return (
        statusConfig[status as keyof typeof statusConfig] || "text-muted-foreground"
    );
}

export function getProgressPercentage(status: string): string {
    const progressMap = {
        pending: "0%",
        running: "25%",
        analyzing: "75%",
        completed: "100%",
        failed: "Error"
    };

    return progressMap[status as keyof typeof progressMap] || "0%";
};

export function getProgressBarStyle(status: string): string {
    const styleMap = {
        pending: "w-0 bg-yellow-500",
        running: "w-1/4 bg-blue-500",
        analyzing: "w-3/4 bg-purple-500",
        completed: "w-full bg-green-500",
        failed: "w-full bg-red-500",
    };

    return styleMap[status as keyof typeof styleMap] || "w-0 bg-gray-500";
}

export function getReportTitle(status: string): string {
    switch (status) {
        case "completed":
            return "Report Ready!";
        case "failed":
            return "Report Failed";
        default:
            return "Generating Report";
    }
}

export function getStatusMessage(status: string): string {
    switch (status) {
        case "pending":
            return "Your report is queued and will start processing shortly.";
        case "running":
            return "We're scraping data from search engines. This may take a few minutes.";
        case "analyzing":
            return "We're analyzing your data and generating AI insights. This may take a few more minutes."
        case "completed":
    }
}