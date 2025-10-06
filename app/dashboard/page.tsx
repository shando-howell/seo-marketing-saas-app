'use client';

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Plus, BarChart3, FileText, Sparkles, Loader2 } from "lucide-react";

const DashboardPage = () => {
    const [prompt, setPrompt] = useState("");
    const [country, setCountry] = useState("US");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="space-y-8">
                    {/* Create Report Section */}
                    <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br
                    from-blue-50/80 via-purple-50/80 to-pink-50/80 dark:from-blue-950/50
                    dark:via-purple-950/50 dark:to-pink-950/50 backdrop-blur-sm">
                        {/* Background decorations */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br 
                        from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full
                        -translate-y-20 translate-x-20" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr
                        from-purple-400/15 to-blue-400/15 rounded-full translate-y-16 -translate-x-16" />
                    </Card>

                    <CardHeader className="text-center pb-6 relative">
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
                            bg-clip-text text-transparent">
                                Create New Report
                            </CardTitle>
                        </div>
                        <CardDescription className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Enter a business name, product, or website to generate a
                        </CardDescription>
                    </CardHeader>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;