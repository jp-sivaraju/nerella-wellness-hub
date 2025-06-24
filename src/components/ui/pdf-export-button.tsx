
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';
import { exportToPDF } from '@/utils/pdfExport';
import { useToast } from "@/hooks/use-toast";

interface PDFExportButtonProps {
  elementId: string;
  filename: string;
  title?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}

const PDFExportButton = ({ 
  elementId, 
  filename, 
  title = "Export PDF",
  variant = "outline",
  size = "default"
}: PDFExportButtonProps) => {
  const [isExporting, setIsExporting] = useState(false);
  const { toast } = useToast();

  const handleExport = async () => {
    setIsExporting(true);
    try {
      await exportToPDF(elementId, filename);
      toast({
        title: "PDF exported successfully",
        description: `${filename}.pdf has been downloaded`,
      });
    } catch (error) {
      toast({
        title: "Export failed",
        description: "There was an error generating the PDF",
        variant: "destructive",
      });
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <Button
      onClick={handleExport}
      disabled={isExporting}
      variant={variant}
      size={size}
      className="flex items-center gap-2"
    >
      <Download className="h-4 w-4" />
      {isExporting ? 'Exporting...' : title}
    </Button>
  );
};

export default PDFExportButton;
