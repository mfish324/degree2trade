"use client";

import { useState } from "react";
import Link from "next/link";
import {
  parentResources,
  gradResources,
  parentCategories,
  gradCategories,
  typeBadgeStyles,
  typeDisplayNames,
  type Resource,
  type ResourceType,
} from "@/lib/resourcesData";

type ResourceTarget = "parent" | "grad";

const resourceTypes: ResourceType[] = [
  "video",
  "article",
  "essay",
  "podcast",
  "youtube-channel",
  "tiktok",
  "reddit",
];

export default function ResourceAdminPage() {
  const [activeTab, setActiveTab] = useState<ResourceTarget>("parent");
  const [showAddForm, setShowAddForm] = useState(false);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  // Form state for new resource
  const [newResource, setNewResource] = useState<Partial<Resource>>({
    type: "article",
    category: "",
    featured: false,
  });

  const resources = activeTab === "parent" ? parentResources : gradResources;
  const categories = activeTab === "parent" ? parentCategories : gradCategories;

  const generateId = () => {
    const prefix = activeTab === "parent" ? "p" : "g";
    const existingIds = resources.map((r) => parseInt(r.id.slice(1)) || 0);
    const maxId = Math.max(...existingIds, 0);
    return `${prefix}${maxId + 1}`;
  };

  const generateResourceCode = (resource: Partial<Resource>) => {
    const id = generateId();
    const code = `  {
    id: "${id}",
    title: "${resource.title || ""}",
    author: "${resource.author || ""}",
    type: "${resource.type || "article"}",
    url: "${resource.url || ""}",
    description: "${resource.description || ""}",${resource.duration ? `\n    duration: "${resource.duration}",` : ""}
    category: "${resource.category || ""}",${resource.featured ? "\n    featured: true," : ""}
  },`;
    return code;
  };

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(label);
      setTimeout(() => setCopySuccess(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleAddResource = () => {
    const code = generateResourceCode(newResource);
    const arrayName = activeTab === "parent" ? "parentResources" : "gradResources";
    const instruction = `Add this to the ${arrayName} array in lib/resourcesData.ts:\n\n${code}`;
    copyToClipboard(instruction, "add");
  };

  const handleRemoveResource = (resource: Resource) => {
    const instruction = `Remove the resource with id "${resource.id}" (${resource.title}) from lib/resourcesData.ts`;
    copyToClipboard(instruction, resource.id);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-surface-light bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="font-display text-xl font-bold text-primary">
            Degree2Trade
          </Link>
          <span className="text-text-muted text-sm">Resource Admin</span>
        </div>
      </header>

      <main className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-2">Resource Manager</h1>
          <p className="text-text-secondary mb-6">
            Add or remove resources from the For Parents and For Grads pages.
          </p>

          {/* Info Box */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-6">
            <p className="text-blue-400 text-sm">
              <strong>How it works:</strong> This tool generates code snippets for you to copy.
              After copying, paste the code into{" "}
              <code className="bg-surface px-1 rounded">lib/resourcesData.ts</code> and commit the changes.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => {
                setActiveTab("parent");
                setNewResource({ ...newResource, category: "" });
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === "parent"
                  ? "bg-primary text-white"
                  : "bg-surface text-text-secondary hover:bg-surface-light"
              }`}
            >
              For Parents ({parentResources.length})
            </button>
            <button
              onClick={() => {
                setActiveTab("grad");
                setNewResource({ ...newResource, category: "" });
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === "grad"
                  ? "bg-primary text-white"
                  : "bg-surface text-text-secondary hover:bg-surface-light"
              }`}
            >
              For Grads ({gradResources.length})
            </button>
          </div>

          {/* Add New Resource Button */}
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="mb-6 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
          >
            {showAddForm ? "Hide Form" : "+ Add New Resource"}
          </button>

          {/* Add Resource Form */}
          {showAddForm && (
            <div className="bg-surface rounded-xl border border-surface-light p-6 mb-8">
              <h2 className="text-lg font-bold mb-4">Add New Resource</h2>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-text-secondary mb-1">Title *</label>
                  <input
                    type="text"
                    value={newResource.title || ""}
                    onChange={(e) => setNewResource({ ...newResource, title: e.target.value })}
                    className="w-full px-3 py-2 bg-surface-light border border-surface-light rounded-lg text-text-primary focus:border-primary focus:outline-none"
                    placeholder="Resource title"
                  />
                </div>
                <div>
                  <label className="block text-sm text-text-secondary mb-1">Author *</label>
                  <input
                    type="text"
                    value={newResource.author || ""}
                    onChange={(e) => setNewResource({ ...newResource, author: e.target.value })}
                    className="w-full px-3 py-2 bg-surface-light border border-surface-light rounded-lg text-text-primary focus:border-primary focus:outline-none"
                    placeholder="Author or source"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm text-text-secondary mb-1">URL *</label>
                <input
                  type="url"
                  value={newResource.url || ""}
                  onChange={(e) => setNewResource({ ...newResource, url: e.target.value })}
                  className="w-full px-3 py-2 bg-surface-light border border-surface-light rounded-lg text-text-primary focus:border-primary focus:outline-none"
                  placeholder="https://..."
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm text-text-secondary mb-1">Description *</label>
                <textarea
                  value={newResource.description || ""}
                  onChange={(e) => setNewResource({ ...newResource, description: e.target.value })}
                  className="w-full px-3 py-2 bg-surface-light border border-surface-light rounded-lg text-text-primary focus:border-primary focus:outline-none"
                  rows={3}
                  placeholder="Brief description of the resource"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-text-secondary mb-1">Type *</label>
                  <select
                    value={newResource.type || "article"}
                    onChange={(e) => setNewResource({ ...newResource, type: e.target.value as ResourceType })}
                    className="w-full px-3 py-2 bg-surface-light border border-surface-light rounded-lg text-text-primary focus:border-primary focus:outline-none"
                  >
                    {resourceTypes.map((type) => (
                      <option key={type} value={type}>
                        {typeDisplayNames[type]}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-text-secondary mb-1">Category *</label>
                  <select
                    value={newResource.category || ""}
                    onChange={(e) => setNewResource({ ...newResource, category: e.target.value })}
                    className="w-full px-3 py-2 bg-surface-light border border-surface-light rounded-lg text-text-primary focus:border-primary focus:outline-none"
                  >
                    <option value="">Select category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-text-secondary mb-1">Duration (optional)</label>
                  <input
                    type="text"
                    value={newResource.duration || ""}
                    onChange={(e) => setNewResource({ ...newResource, duration: e.target.value })}
                    className="w-full px-3 py-2 bg-surface-light border border-surface-light rounded-lg text-text-primary focus:border-primary focus:outline-none"
                    placeholder="e.g., 10 min"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={newResource.featured || false}
                    onChange={(e) => setNewResource({ ...newResource, featured: e.target.checked })}
                    className="w-4 h-4 rounded border-surface-light accent-primary"
                  />
                  <span className="text-sm text-text-secondary">Featured (shows in carousel)</span>
                </label>
              </div>

              {/* Generated Code Preview */}
              <div className="mb-4">
                <label className="block text-sm text-text-secondary mb-1">Generated Code:</label>
                <pre className="bg-background p-4 rounded-lg text-xs overflow-x-auto text-green-400 border border-surface-light">
                  {generateResourceCode(newResource)}
                </pre>
              </div>

              <button
                onClick={handleAddResource}
                disabled={!newResource.title || !newResource.url || !newResource.category}
                className="px-4 py-2 bg-primary hover:bg-primary-hover disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors"
              >
                {copySuccess === "add" ? "Copied!" : "Copy Code to Clipboard"}
              </button>
            </div>
          )}

          {/* Resource List */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold">
              Current Resources ({resources.length})
            </h2>

            {resources.map((resource) => {
              const style = typeBadgeStyles[resource.type];
              return (
                <div
                  key={resource.id}
                  className="bg-surface rounded-lg border border-surface-light p-4 flex items-start justify-between gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${style.bg} ${style.text}`}>
                        {typeDisplayNames[resource.type]}
                      </span>
                      <span className="text-text-muted text-xs">{resource.category}</span>
                      {resource.featured && (
                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-yellow-500/20 text-yellow-400">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="font-medium truncate">{resource.title}</h3>
                    <p className="text-text-muted text-sm">{resource.author}</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-surface-light hover:bg-surface text-text-secondary rounded text-sm"
                    >
                      View
                    </a>
                    <button
                      onClick={() => handleRemoveResource(resource)}
                      className="px-3 py-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded text-sm"
                    >
                      {copySuccess === resource.id ? "Copied!" : "Remove"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
