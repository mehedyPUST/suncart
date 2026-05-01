"use client";

import React from 'react';
import Link from 'next/link';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const footerData = [
    {
        id: 1,
        title: "Product",
        links: [
            { id: 1, name: "Features", path: "/features" },
            { id: 2, name: "Pricing", path: "/pricing" },
            { id: 3, name: "Templates", path: "/templates" },
            { id: 4, name: "Integrations", path: "/integrations" },
        ],
    },
    {
        id: 2,
        title: "Company",
        links: [
            { id: 1, name: "About", path: "/about" },
            { id: 2, name: "Blog", path: "/blog" },
            { id: 3, name: "Careers", path: "/careers" },
            { id: 4, name: "Press", path: "/press" },
        ],
    },
    {
        id: 3,
        title: "Resources",
        links: [
            { id: 1, name: "Documentation", path: "/docs" },
            { id: 2, name: "Help Center", path: "/help" },
            { id: 3, name: "Community", path: "/community" },
            { id: 4, name: "Contact", path: "/contact" },
        ],
    },
];

const footerInfo = {
    brand: "SunCart",
    description: "Your premium e-commerce solution for quality products and exceptional service.",
};

const Footer = () => {
    // Handle external social links
    const socialLinks = [
        { icon: RiInstagramFill, href: "https://instagram.com", label: "Instagram" },
        { icon: FaFacebookSquare, href: "https://facebook.com", label: "Facebook" },
        { icon: FaXTwitter, href: "https://twitter.com", label: "Twitter" },
    ];

    return (
        <footer className="bg-gray-900 py-12 mt-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-11/12 mx-auto max-w-7xl">
                {/* Brand Section */}
                <div className="md:col-span-1 space-y-3 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                        {footerInfo.brand}
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {footerInfo.description}
                    </p>
                    <hr className="border-gray-700 md:hidden" />
                </div>

                {/* Links Section */}
                <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
                    {footerData.map((item) => (
                        <div key={item.id}>
                            <h3 className="text-sm md:text-base font-semibold text-white mb-3 uppercase tracking-wider">
                                {item.title}
                            </h3>
                            <ul className="space-y-2">
                                {item.links.map((link) => (
                                    <li key={link.id}>
                                        <Link
                                            href={link.path}
                                            className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Social Links Section */}
                <div className="md:col-span-1 space-y-3">
                    <h3 className="text-sm md:text-base font-semibold text-white mb-3 uppercase tracking-wider">
                        Follow Us
                    </h3>
                    <div className="flex items-center gap-3">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="bg-gray-800 text-white rounded-lg p-2.5 hover:bg-gray-700 transition-all duration-200 hover:scale-105"
                                >
                                    <Icon size={20} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-gray-800 mt-8 pt-6">
                <div className="w-11/12 mx-auto max-w-7xl text-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} {footerInfo.brand}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;